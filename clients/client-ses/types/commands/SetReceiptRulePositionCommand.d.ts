import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetReceiptRulePositionRequest, SetReceiptRulePositionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetReceiptRulePositionCommandInput = SetReceiptRulePositionRequest;
export declare type SetReceiptRulePositionCommandOutput = SetReceiptRulePositionResponse & __MetadataBearer;
export declare class SetReceiptRulePositionCommand extends $Command<SetReceiptRulePositionCommandInput, SetReceiptRulePositionCommandOutput, SESClientResolvedConfig> {
    readonly input: SetReceiptRulePositionCommandInput;
    constructor(input: SetReceiptRulePositionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetReceiptRulePositionCommandInput, SetReceiptRulePositionCommandOutput>;
    private serialize;
    private deserialize;
}
