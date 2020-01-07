import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminForgetDeviceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminForgetDeviceCommandInput = AdminForgetDeviceRequest;
export declare type AdminForgetDeviceCommandOutput = __MetadataBearer;
export declare class AdminForgetDeviceCommand extends $Command<AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminForgetDeviceCommandInput;
    constructor(input: AdminForgetDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
