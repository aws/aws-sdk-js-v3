import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetNetworkProfileRequest, GetNetworkProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetNetworkProfileCommandInput = GetNetworkProfileRequest;
export declare type GetNetworkProfileCommandOutput = GetNetworkProfileResult & __MetadataBearer;
export declare class GetNetworkProfileCommand extends $Command<GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetNetworkProfileCommandInput;
    constructor(input: GetNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
