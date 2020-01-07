import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterMessage, DeleteClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClusterCommandInput = DeleteClusterMessage;
export declare type DeleteClusterCommandOutput = DeleteClusterResult & __MetadataBearer;
export declare class DeleteClusterCommand extends $Command<DeleteClusterCommandInput, DeleteClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterCommandInput;
    constructor(input: DeleteClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput>;
    private serialize;
    private deserialize;
}
