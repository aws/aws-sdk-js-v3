import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetSubscriptionAttributesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetSubscriptionAttributesCommandInput = SetSubscriptionAttributesInput;
export declare type SetSubscriptionAttributesCommandOutput = __MetadataBearer;
export declare class SetSubscriptionAttributesCommand extends $Command<SetSubscriptionAttributesCommandInput, SetSubscriptionAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetSubscriptionAttributesCommandInput;
    constructor(input: SetSubscriptionAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSubscriptionAttributesCommandInput, SetSubscriptionAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
