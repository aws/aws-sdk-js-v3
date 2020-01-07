import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { UpdateComponentConfigurationRequest, UpdateComponentConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateComponentConfigurationCommandInput = UpdateComponentConfigurationRequest;
export declare type UpdateComponentConfigurationCommandOutput = UpdateComponentConfigurationResponse & __MetadataBearer;
export declare class UpdateComponentConfigurationCommand extends $Command<UpdateComponentConfigurationCommandInput, UpdateComponentConfigurationCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: UpdateComponentConfigurationCommandInput;
    constructor(input: UpdateComponentConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateComponentConfigurationCommandInput, UpdateComponentConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
