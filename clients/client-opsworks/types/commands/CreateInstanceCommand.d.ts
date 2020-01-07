import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CreateInstanceRequest, CreateInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInstanceCommandInput = CreateInstanceRequest;
export declare type CreateInstanceCommandOutput = CreateInstanceResult & __MetadataBearer;
export declare class CreateInstanceCommand extends $Command<CreateInstanceCommandInput, CreateInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: CreateInstanceCommandInput;
    constructor(input: CreateInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceCommandInput, CreateInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
