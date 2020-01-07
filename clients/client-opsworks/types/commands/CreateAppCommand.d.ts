import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CreateAppRequest, CreateAppResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAppCommandInput = CreateAppRequest;
export declare type CreateAppCommandOutput = CreateAppResult & __MetadataBearer;
export declare class CreateAppCommand extends $Command<CreateAppCommandInput, CreateAppCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: CreateAppCommandInput;
    constructor(input: CreateAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAppCommandInput, CreateAppCommandOutput>;
    private serialize;
    private deserialize;
}
