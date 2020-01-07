import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { UpdateClusterRequest, UpdateClusterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateClusterCommandInput = UpdateClusterRequest;
export declare type UpdateClusterCommandOutput = UpdateClusterResponse & __MetadataBearer;
export declare class UpdateClusterCommand extends $Command<UpdateClusterCommandInput, UpdateClusterCommandOutput, DAXClientResolvedConfig> {
    readonly input: UpdateClusterCommandInput;
    constructor(input: UpdateClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterCommandInput, UpdateClusterCommandOutput>;
    private serialize;
    private deserialize;
}
