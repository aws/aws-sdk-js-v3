import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateConfigurationSetTrackingOptionsRequest, UpdateConfigurationSetTrackingOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConfigurationSetTrackingOptionsCommandInput = UpdateConfigurationSetTrackingOptionsRequest;
export declare type UpdateConfigurationSetTrackingOptionsCommandOutput = UpdateConfigurationSetTrackingOptionsResponse & __MetadataBearer;
export declare class UpdateConfigurationSetTrackingOptionsCommand extends $Command<UpdateConfigurationSetTrackingOptionsCommandInput, UpdateConfigurationSetTrackingOptionsCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateConfigurationSetTrackingOptionsCommandInput;
    constructor(input: UpdateConfigurationSetTrackingOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationSetTrackingOptionsCommandInput, UpdateConfigurationSetTrackingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
