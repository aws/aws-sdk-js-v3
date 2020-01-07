import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CreateLayerRequest, CreateLayerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLayerCommandInput = CreateLayerRequest;
export declare type CreateLayerCommandOutput = CreateLayerResult & __MetadataBearer;
export declare class CreateLayerCommand extends $Command<CreateLayerCommandInput, CreateLayerCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: CreateLayerCommandInput;
    constructor(input: CreateLayerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLayerCommandInput, CreateLayerCommandOutput>;
    private serialize;
    private deserialize;
}
