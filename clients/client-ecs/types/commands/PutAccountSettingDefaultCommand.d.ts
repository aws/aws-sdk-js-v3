import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAccountSettingDefaultRequest, PutAccountSettingDefaultResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAccountSettingDefaultCommandInput = PutAccountSettingDefaultRequest;
export declare type PutAccountSettingDefaultCommandOutput = PutAccountSettingDefaultResponse & __MetadataBearer;
export declare class PutAccountSettingDefaultCommand extends $Command<PutAccountSettingDefaultCommandInput, PutAccountSettingDefaultCommandOutput, ECSClientResolvedConfig> {
    readonly input: PutAccountSettingDefaultCommandInput;
    constructor(input: PutAccountSettingDefaultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccountSettingDefaultCommandInput, PutAccountSettingDefaultCommandOutput>;
    private serialize;
    private deserialize;
}
