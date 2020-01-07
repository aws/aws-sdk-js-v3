import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateConfigurationSetTrackingOptionsRequest, CreateConfigurationSetTrackingOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConfigurationSetTrackingOptionsCommandInput = CreateConfigurationSetTrackingOptionsRequest;
export declare type CreateConfigurationSetTrackingOptionsCommandOutput = CreateConfigurationSetTrackingOptionsResponse & __MetadataBearer;
export declare class CreateConfigurationSetTrackingOptionsCommand extends $Command<CreateConfigurationSetTrackingOptionsCommandInput, CreateConfigurationSetTrackingOptionsCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateConfigurationSetTrackingOptionsCommandInput;
    constructor(input: CreateConfigurationSetTrackingOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationSetTrackingOptionsCommandInput, CreateConfigurationSetTrackingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
