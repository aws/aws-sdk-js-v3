import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateConfigurationSetReputationMetricsEnabledRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConfigurationSetReputationMetricsEnabledCommandInput = UpdateConfigurationSetReputationMetricsEnabledRequest;
export declare type UpdateConfigurationSetReputationMetricsEnabledCommandOutput = __MetadataBearer;
export declare class UpdateConfigurationSetReputationMetricsEnabledCommand extends $Command<UpdateConfigurationSetReputationMetricsEnabledCommandInput, UpdateConfigurationSetReputationMetricsEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateConfigurationSetReputationMetricsEnabledCommandInput;
    constructor(input: UpdateConfigurationSetReputationMetricsEnabledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationSetReputationMetricsEnabledCommandInput, UpdateConfigurationSetReputationMetricsEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
