import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminGetDeviceRequest, AdminGetDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminGetDeviceCommandInput = AdminGetDeviceRequest;
export declare type AdminGetDeviceCommandOutput = AdminGetDeviceResponse & __MetadataBearer;
export declare class AdminGetDeviceCommand extends $Command<AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminGetDeviceCommandInput;
    constructor(input: AdminGetDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
