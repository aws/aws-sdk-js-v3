import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteIndexFieldRequest, DeleteIndexFieldResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIndexFieldCommandInput = DeleteIndexFieldRequest;
export declare type DeleteIndexFieldCommandOutput = DeleteIndexFieldResponse & __MetadataBearer;
export declare class DeleteIndexFieldCommand extends $Command<DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteIndexFieldCommandInput;
    constructor(input: DeleteIndexFieldCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput>;
    private serialize;
    private deserialize;
}
