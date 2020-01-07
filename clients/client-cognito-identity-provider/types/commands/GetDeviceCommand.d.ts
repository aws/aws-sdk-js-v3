import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetDeviceRequest, GetDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeviceCommandInput = GetDeviceRequest;
export declare type GetDeviceCommandOutput = GetDeviceResponse & __MetadataBearer;
export declare class GetDeviceCommand extends $Command<GetDeviceCommandInput, GetDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetDeviceCommandInput;
    constructor(input: GetDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceCommandInput, GetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
