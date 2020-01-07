import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DeleteEntityRecognizerRequest, DeleteEntityRecognizerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEntityRecognizerCommandInput = DeleteEntityRecognizerRequest;
export declare type DeleteEntityRecognizerCommandOutput = DeleteEntityRecognizerResponse & __MetadataBearer;
export declare class DeleteEntityRecognizerCommand extends $Command<DeleteEntityRecognizerCommandInput, DeleteEntityRecognizerCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DeleteEntityRecognizerCommandInput;
    constructor(input: DeleteEntityRecognizerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEntityRecognizerCommandInput, DeleteEntityRecognizerCommandOutput>;
    private serialize;
    private deserialize;
}
