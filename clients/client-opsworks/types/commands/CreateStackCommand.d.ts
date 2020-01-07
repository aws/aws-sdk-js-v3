import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CreateStackRequest, CreateStackResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStackCommandInput = CreateStackRequest;
export declare type CreateStackCommandOutput = CreateStackResult & __MetadataBearer;
export declare class CreateStackCommand extends $Command<CreateStackCommandInput, CreateStackCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: CreateStackCommandInput;
    constructor(input: CreateStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStackCommandInput, CreateStackCommandOutput>;
    private serialize;
    private deserialize;
}
