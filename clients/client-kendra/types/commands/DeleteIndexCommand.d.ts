import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { DeleteIndexRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIndexCommandInput = DeleteIndexRequest;
export declare type DeleteIndexCommandOutput = __MetadataBearer;
export declare class DeleteIndexCommand extends $Command<DeleteIndexCommandInput, DeleteIndexCommandOutput, kendraClientResolvedConfig> {
    readonly input: DeleteIndexCommandInput;
    constructor(input: DeleteIndexCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIndexCommandInput, DeleteIndexCommandOutput>;
    private serialize;
    private deserialize;
}
