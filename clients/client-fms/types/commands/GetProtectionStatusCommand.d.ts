import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetProtectionStatusRequest, GetProtectionStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetProtectionStatusCommandInput = GetProtectionStatusRequest;
export declare type GetProtectionStatusCommandOutput = GetProtectionStatusResponse & __MetadataBearer;
export declare class GetProtectionStatusCommand extends $Command<GetProtectionStatusCommandInput, GetProtectionStatusCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetProtectionStatusCommandInput;
    constructor(input: GetProtectionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProtectionStatusCommandInput, GetProtectionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
