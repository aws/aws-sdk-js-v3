import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminListDevicesRequest, AdminListDevicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminListDevicesCommandInput = AdminListDevicesRequest;
export declare type AdminListDevicesCommandOutput = AdminListDevicesResponse & __MetadataBearer;
export declare class AdminListDevicesCommand extends $Command<AdminListDevicesCommandInput, AdminListDevicesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminListDevicesCommandInput;
    constructor(input: AdminListDevicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminListDevicesCommandInput, AdminListDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
