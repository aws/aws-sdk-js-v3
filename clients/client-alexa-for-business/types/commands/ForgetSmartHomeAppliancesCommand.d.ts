import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ForgetSmartHomeAppliancesRequest, ForgetSmartHomeAppliancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ForgetSmartHomeAppliancesCommandInput = ForgetSmartHomeAppliancesRequest;
export declare type ForgetSmartHomeAppliancesCommandOutput = ForgetSmartHomeAppliancesResponse & __MetadataBearer;
export declare class ForgetSmartHomeAppliancesCommand extends $Command<ForgetSmartHomeAppliancesCommandInput, ForgetSmartHomeAppliancesCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ForgetSmartHomeAppliancesCommandInput;
    constructor(input: ForgetSmartHomeAppliancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ForgetSmartHomeAppliancesCommandInput, ForgetSmartHomeAppliancesCommandOutput>;
    private serialize;
    private deserialize;
}
