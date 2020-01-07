import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ConfirmDeviceRequest, ConfirmDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmDeviceCommandInput = ConfirmDeviceRequest;
export declare type ConfirmDeviceCommandOutput = ConfirmDeviceResponse & __MetadataBearer;
export declare class ConfirmDeviceCommand extends $Command<ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ConfirmDeviceCommandInput;
    constructor(input: ConfirmDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
