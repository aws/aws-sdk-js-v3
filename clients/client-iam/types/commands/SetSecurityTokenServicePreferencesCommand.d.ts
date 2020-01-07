import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SetSecurityTokenServicePreferencesRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetSecurityTokenServicePreferencesCommandInput = SetSecurityTokenServicePreferencesRequest;
export declare type SetSecurityTokenServicePreferencesCommandOutput = __MetadataBearer;
export declare class SetSecurityTokenServicePreferencesCommand extends $Command<SetSecurityTokenServicePreferencesCommandInput, SetSecurityTokenServicePreferencesCommandOutput, IAMClientResolvedConfig> {
    readonly input: SetSecurityTokenServicePreferencesCommandInput;
    constructor(input: SetSecurityTokenServicePreferencesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSecurityTokenServicePreferencesCommandInput, SetSecurityTokenServicePreferencesCommandOutput>;
    private serialize;
    private deserialize;
}
