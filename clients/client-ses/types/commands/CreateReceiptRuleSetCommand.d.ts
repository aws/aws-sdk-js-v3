import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateReceiptRuleSetRequest, CreateReceiptRuleSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReceiptRuleSetCommandInput = CreateReceiptRuleSetRequest;
export declare type CreateReceiptRuleSetCommandOutput = CreateReceiptRuleSetResponse & __MetadataBearer;
export declare class CreateReceiptRuleSetCommand extends $Command<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateReceiptRuleSetCommandInput;
    constructor(input: CreateReceiptRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
