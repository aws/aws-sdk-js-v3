import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUpdateDeviceStatusRequest, AdminUpdateDeviceStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminUpdateDeviceStatusCommandInput = AdminUpdateDeviceStatusRequest;
export declare type AdminUpdateDeviceStatusCommandOutput = AdminUpdateDeviceStatusResponse & __MetadataBearer;
export declare class AdminUpdateDeviceStatusCommand extends $Command<AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUpdateDeviceStatusCommandInput;
    constructor(input: AdminUpdateDeviceStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
