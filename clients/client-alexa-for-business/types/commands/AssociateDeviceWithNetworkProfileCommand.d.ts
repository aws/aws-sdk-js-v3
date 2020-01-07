import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateDeviceWithNetworkProfileRequest, AssociateDeviceWithNetworkProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateDeviceWithNetworkProfileCommandInput = AssociateDeviceWithNetworkProfileRequest;
export declare type AssociateDeviceWithNetworkProfileCommandOutput = AssociateDeviceWithNetworkProfileResponse & __MetadataBearer;
export declare class AssociateDeviceWithNetworkProfileCommand extends $Command<AssociateDeviceWithNetworkProfileCommandInput, AssociateDeviceWithNetworkProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: AssociateDeviceWithNetworkProfileCommandInput;
    constructor(input: AssociateDeviceWithNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDeviceWithNetworkProfileCommandInput, AssociateDeviceWithNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
