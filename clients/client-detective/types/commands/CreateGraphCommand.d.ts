import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { CreateGraphResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGraphCommandInput = {};
export declare type CreateGraphCommandOutput = CreateGraphResponse & __MetadataBearer;
export declare class CreateGraphCommand extends $Command<CreateGraphCommandInput, CreateGraphCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: CreateGraphCommandInput;
    constructor(input: CreateGraphCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGraphCommandInput, CreateGraphCommandOutput>;
    private serialize;
    private deserialize;
}
