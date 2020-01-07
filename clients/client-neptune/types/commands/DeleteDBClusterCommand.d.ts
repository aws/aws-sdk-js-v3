import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBClusterCommandInput = DeleteDBClusterMessage;
export declare type DeleteDBClusterCommandOutput = DeleteDBClusterResult & __MetadataBearer;
export declare class DeleteDBClusterCommand extends $Command<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DeleteDBClusterCommandInput;
    constructor(input: DeleteDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
