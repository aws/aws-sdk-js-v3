import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ForgetDeviceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ForgetDeviceCommandInput = ForgetDeviceRequest;
export declare type ForgetDeviceCommandOutput = __MetadataBearer;
export declare class ForgetDeviceCommand extends $Command<ForgetDeviceCommandInput, ForgetDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ForgetDeviceCommandInput;
    constructor(input: ForgetDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ForgetDeviceCommandInput, ForgetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
