import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteReceiptFilterRequest, DeleteReceiptFilterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReceiptFilterCommandInput = DeleteReceiptFilterRequest;
export declare type DeleteReceiptFilterCommandOutput = DeleteReceiptFilterResponse & __MetadataBearer;
export declare class DeleteReceiptFilterCommand extends $Command<DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteReceiptFilterCommandInput;
    constructor(input: DeleteReceiptFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput>;
    private serialize;
    private deserialize;
}
