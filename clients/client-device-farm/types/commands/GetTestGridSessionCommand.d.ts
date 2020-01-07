import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetTestGridSessionRequest, GetTestGridSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTestGridSessionCommandInput = GetTestGridSessionRequest;
export declare type GetTestGridSessionCommandOutput = GetTestGridSessionResult & __MetadataBearer;
export declare class GetTestGridSessionCommand extends $Command<GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetTestGridSessionCommandInput;
    constructor(input: GetTestGridSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput>;
    private serialize;
    private deserialize;
}
