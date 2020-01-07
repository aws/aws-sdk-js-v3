import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { GetConfigRequest, GetConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConfigCommandInput = GetConfigRequest;
export declare type GetConfigCommandOutput = GetConfigResponse & __MetadataBearer;
export declare class GetConfigCommand extends $Command<GetConfigCommandInput, GetConfigCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: GetConfigCommandInput;
    constructor(input: GetConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConfigCommandInput, GetConfigCommandOutput>;
    private serialize;
    private deserialize;
}
