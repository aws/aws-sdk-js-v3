import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { PutConfigurationSetDeliveryOptionsRequest, PutConfigurationSetDeliveryOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutConfigurationSetDeliveryOptionsCommandInput = PutConfigurationSetDeliveryOptionsRequest;
export declare type PutConfigurationSetDeliveryOptionsCommandOutput = PutConfigurationSetDeliveryOptionsResponse & __MetadataBearer;
export declare class PutConfigurationSetDeliveryOptionsCommand extends $Command<PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput, SESClientResolvedConfig> {
    readonly input: PutConfigurationSetDeliveryOptionsCommandInput;
    constructor(input: PutConfigurationSetDeliveryOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
