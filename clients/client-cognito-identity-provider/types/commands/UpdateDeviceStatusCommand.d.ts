import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateDeviceStatusRequest, UpdateDeviceStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDeviceStatusCommandInput = UpdateDeviceStatusRequest;
export declare type UpdateDeviceStatusCommandOutput = UpdateDeviceStatusResponse & __MetadataBearer;
export declare class UpdateDeviceStatusCommand extends $Command<UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateDeviceStatusCommandInput;
    constructor(input: UpdateDeviceStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
