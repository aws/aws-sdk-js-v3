import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSmartHomeAppliancesRequest, ListSmartHomeAppliancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSmartHomeAppliancesCommandInput = ListSmartHomeAppliancesRequest;
export declare type ListSmartHomeAppliancesCommandOutput = ListSmartHomeAppliancesResponse & __MetadataBearer;
export declare class ListSmartHomeAppliancesCommand extends $Command<ListSmartHomeAppliancesCommandInput, ListSmartHomeAppliancesCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListSmartHomeAppliancesCommandInput;
    constructor(input: ListSmartHomeAppliancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSmartHomeAppliancesCommandInput, ListSmartHomeAppliancesCommandOutput>;
    private serialize;
    private deserialize;
}
