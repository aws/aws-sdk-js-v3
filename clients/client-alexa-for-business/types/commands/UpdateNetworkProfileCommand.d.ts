import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateNetworkProfileRequest, UpdateNetworkProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNetworkProfileCommandInput = UpdateNetworkProfileRequest;
export declare type UpdateNetworkProfileCommandOutput = UpdateNetworkProfileResponse & __MetadataBearer;
export declare class UpdateNetworkProfileCommand extends $Command<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateNetworkProfileCommandInput;
    constructor(input: UpdateNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
