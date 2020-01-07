import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateTestGridUrlRequest, CreateTestGridUrlResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTestGridUrlCommandInput = CreateTestGridUrlRequest;
export declare type CreateTestGridUrlCommandOutput = CreateTestGridUrlResult & __MetadataBearer;
export declare class CreateTestGridUrlCommand extends $Command<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateTestGridUrlCommandInput;
    constructor(input: CreateTestGridUrlCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput>;
    private serialize;
    private deserialize;
}
