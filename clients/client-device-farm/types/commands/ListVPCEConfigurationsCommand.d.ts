import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListVPCEConfigurationsRequest, ListVPCEConfigurationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVPCEConfigurationsCommandInput = ListVPCEConfigurationsRequest;
export declare type ListVPCEConfigurationsCommandOutput = ListVPCEConfigurationsResult & __MetadataBearer;
export declare class ListVPCEConfigurationsCommand extends $Command<ListVPCEConfigurationsCommandInput, ListVPCEConfigurationsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListVPCEConfigurationsCommandInput;
    constructor(input: ListVPCEConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVPCEConfigurationsCommandInput, ListVPCEConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
