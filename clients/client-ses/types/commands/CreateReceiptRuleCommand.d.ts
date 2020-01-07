import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateReceiptRuleRequest, CreateReceiptRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReceiptRuleCommandInput = CreateReceiptRuleRequest;
export declare type CreateReceiptRuleCommandOutput = CreateReceiptRuleResponse & __MetadataBearer;
export declare class CreateReceiptRuleCommand extends $Command<CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateReceiptRuleCommandInput;
    constructor(input: CreateReceiptRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput>;
    private serialize;
    private deserialize;
}
