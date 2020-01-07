import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListDevicesRequest, ListDevicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDevicesCommandInput = ListDevicesRequest;
export declare type ListDevicesCommandOutput = ListDevicesResponse & __MetadataBearer;
export declare class ListDevicesCommand extends $Command<ListDevicesCommandInput, ListDevicesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListDevicesCommandInput;
    constructor(input: ListDevicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevicesCommandInput, ListDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
