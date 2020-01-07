import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClusterCommandInput = DeleteClusterRequest;
export declare type DeleteClusterCommandOutput = DeleteClusterResponse & __MetadataBearer;
export declare class DeleteClusterCommand extends $Command<DeleteClusterCommandInput, DeleteClusterCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteClusterCommandInput;
    constructor(input: DeleteClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput>;
    private serialize;
    private deserialize;
}
