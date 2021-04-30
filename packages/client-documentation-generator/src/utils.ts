import { ProjectReflection, SourceDirectory } from "typedoc/dist/lib/models";

export const getCurrentClientDirectory = (event: { project: ProjectReflection }): SourceDirectory => {
  const clientsDirectory = event.project.directory.directories["clients"].directories;
  return Object.values(clientsDirectory).filter((directory) =>
    directory?.files.find((file) => file.name.endsWith("Client.ts"))
  )[0];
};
