import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateReceiptFilterRequest, CreateReceiptFilterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReceiptFilterCommandInput = CreateReceiptFilterRequest;
export declare type CreateReceiptFilterCommandOutput = CreateReceiptFilterResponse & __MetadataBearer;
export declare class CreateReceiptFilterCommand extends $Command<CreateReceiptFilterCommandInput, CreateReceiptFilterCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateReceiptFilterCommandInput;
    constructor(input: CreateReceiptFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReceiptFilterCommandInput, CreateReceiptFilterCommandOutput>;
    private serialize;
    private deserialize;
}
