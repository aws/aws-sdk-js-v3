import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetConnectionStatusRequest, GetConnectionStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectionStatusCommandInput = GetConnectionStatusRequest;
export declare type GetConnectionStatusCommandOutput = GetConnectionStatusResponse & __MetadataBearer;
export declare class GetConnectionStatusCommand extends $Command<GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetConnectionStatusCommandInput;
    constructor(input: GetConnectionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
