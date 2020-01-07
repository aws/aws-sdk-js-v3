import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { UnsubscribeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnsubscribeCommandInput = UnsubscribeInput;
export declare type UnsubscribeCommandOutput = __MetadataBearer;
export declare class UnsubscribeCommand extends $Command<UnsubscribeCommandInput, UnsubscribeCommandOutput, SNSClientResolvedConfig> {
    readonly input: UnsubscribeCommandInput;
    constructor(input: UnsubscribeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnsubscribeCommandInput, UnsubscribeCommandOutput>;
    private serialize;
    private deserialize;
}
