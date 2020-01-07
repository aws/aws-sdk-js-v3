import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { TestConnectionMessage, TestConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestConnectionCommandInput = TestConnectionMessage;
export declare type TestConnectionCommandOutput = TestConnectionResponse & __MetadataBearer;
export declare class TestConnectionCommand extends $Command<TestConnectionCommandInput, TestConnectionCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: TestConnectionCommandInput;
    constructor(input: TestConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestConnectionCommandInput, TestConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
