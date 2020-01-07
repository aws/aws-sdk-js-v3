import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { StartSmartHomeApplianceDiscoveryRequest, StartSmartHomeApplianceDiscoveryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartSmartHomeApplianceDiscoveryCommandInput = StartSmartHomeApplianceDiscoveryRequest;
export declare type StartSmartHomeApplianceDiscoveryCommandOutput = StartSmartHomeApplianceDiscoveryResponse & __MetadataBearer;
export declare class StartSmartHomeApplianceDiscoveryCommand extends $Command<StartSmartHomeApplianceDiscoveryCommandInput, StartSmartHomeApplianceDiscoveryCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: StartSmartHomeApplianceDiscoveryCommandInput;
    constructor(input: StartSmartHomeApplianceDiscoveryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSmartHomeApplianceDiscoveryCommandInput, StartSmartHomeApplianceDiscoveryCommandOutput>;
    private serialize;
    private deserialize;
}
