import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateClusterRequest, UpdateClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateClusterCommandInput = UpdateClusterRequest;
export declare type UpdateClusterCommandOutput = UpdateClusterResult & __MetadataBearer;
export declare class UpdateClusterCommand extends $Command<UpdateClusterCommandInput, UpdateClusterCommandOutput, SnowballClientResolvedConfig> {
    readonly input: UpdateClusterCommandInput;
    constructor(input: UpdateClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterCommandInput, UpdateClusterCommandOutput>;
    private serialize;
    private deserialize;
}
