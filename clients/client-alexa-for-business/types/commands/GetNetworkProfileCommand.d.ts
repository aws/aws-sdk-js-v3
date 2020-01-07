import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetNetworkProfileRequest, GetNetworkProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetNetworkProfileCommandInput = GetNetworkProfileRequest;
export declare type GetNetworkProfileCommandOutput = GetNetworkProfileResponse & __MetadataBearer;
export declare class GetNetworkProfileCommand extends $Command<GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetNetworkProfileCommandInput;
    constructor(input: GetNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
