import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutDeliveryChannelRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutDeliveryChannelCommandInput = PutDeliveryChannelRequest;
export declare type PutDeliveryChannelCommandOutput = __MetadataBearer;
export declare class PutDeliveryChannelCommand extends $Command<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutDeliveryChannelCommandInput;
    constructor(input: PutDeliveryChannelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput>;
    private serialize;
    private deserialize;
}
