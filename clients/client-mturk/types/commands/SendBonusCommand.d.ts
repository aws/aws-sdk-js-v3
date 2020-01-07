import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { SendBonusRequest, SendBonusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendBonusCommandInput = SendBonusRequest;
export declare type SendBonusCommandOutput = SendBonusResponse & __MetadataBearer;
export declare class SendBonusCommand extends $Command<SendBonusCommandInput, SendBonusCommandOutput, MTurkClientResolvedConfig> {
    readonly input: SendBonusCommandInput;
    constructor(input: SendBonusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendBonusCommandInput, SendBonusCommandOutput>;
    private serialize;
    private deserialize;
}
